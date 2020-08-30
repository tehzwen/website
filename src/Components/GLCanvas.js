import React, { Component } from 'react'
import { vec3, mat4 } from 'gl-matrix';

export default class GLCanvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            camera: {
                position: vec3.fromValues(1.5, 0.0, -2.5),
                center: vec3.fromValues(0.4, 0.0, 0.0),
                up: vec3.fromValues(0.0, 1.0, 0.0),
            }
        };
    }

    componentDidMount() {
        if (this.refs.glCanvas) {

            let gl = this.refs.glCanvas.getContext("webgl2");
            //test if the browser supports webgl
            if (gl === null) {
                console.error('WebGL 2 not supported by your browser',
                    'Check to see you are using a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API#WebGL_2_2" class="alert-link">modern browser</a>.');
                return;
            }

            this.setState({
                canvas: this.refs.glCanvas,
                gl: gl
            }, () => {
                this.setup();
            })
        }
    }

    initializeShaderProgram(gl) {

        // Vertex shader source code
        const vsSource =
            `#version 300 es
            in vec3 aPosition;
            in vec4 aColor;

            uniform mat4 uProjectionMatrix;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;

            out vec4 oColor;
            
            void main() {
                oColor = aColor;
                gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0);
            }
            `;

        // Fragment shader source code
        const fsSource =
            `#version 300 es
            precision highp float;
            in vec4 oColor;
            out vec4 fragColor;
            void main() {
                fragColor = oColor;
                //fragColor = vec4(0.2, 0.5, 0.8, 1.0);
            }
            `;


        // Create our shader program with our custom function
        const shaderProgram = this.initShaderProgram(gl, vsSource, fsSource);

        // Collect all the info needed to use the shader program.
        const programInfo = {
            // The actual shader program
            program: shaderProgram,
            // The attribute locations. WebGL will use there to hook up the buffers to the shader program.
            // NOTE: it may be wise to check if these calls fail by seeing that the returned location is not -1.
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, 'aPosition'),
                vertexColour: gl.getAttribLocation(shaderProgram, 'aColor'),
            },
            uniformLocations: {
                projection: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                view: gl.getUniformLocation(shaderProgram, 'uViewMatrix'),
                model: gl.getUniformLocation(shaderProgram, 'uModelMatrix'),
                cameraPosition: gl.getUniformLocation(shaderProgram, 'uCameraPosition'),
            }
        };

        // Check to see if we found the locations of our uniforms and attributes
        // Typos are a common source of failure
        if (programInfo.attribLocations.vertexPosition === -1 ||
            programInfo.attribLocations.vertexColour === -1 ||
            programInfo.uniformLocations.projection === -1 ||
            programInfo.uniformLocations.model === -1 ||
            programInfo.uniformLocations.view === -1 ||
            programInfo.uniformLocations.cameraPosition === -1) {
            console.error('Shader Location Error', 'One or more of the uniform and attribute variables in the shaders could not be located');
        }

        return programInfo;
    }

    loadShader(gl, type, source) {
        // Create a new shader object
        const shader = gl.createShader(type);

        // Send the source to the shader object
        gl.shaderSource(shader, source);

        // Compile the shader program
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            // Fail with an error message
            var typeStr = '';
            if (type === gl.VERTEX_SHADER) {
                typeStr = 'VERTEX';
            } else if (type === gl.FRAGMENT_SHADER) {
                typeStr = 'FRAGMENT';
            }
            console.error('An error occurred compiling the shader: ' + typeStr, gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    initShaderProgram(gl, vsSource, fsSource) {
        // Use our custom function to load and compile the shader objects
        const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        // Create the shader program by attaching and linking the shader objects
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert('Unable to link the shader program' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }

        return shaderProgram;
    }


    initBuffers(gl, programInfo, positions, colours, indicesArray) {
        // Allocate and assign a Vertex Array Object to our handle
        var vertexArrayObject = gl.createVertexArray();

        // Bind our Vertex Array Object as the current used object
        gl.bindVertexArray(vertexArrayObject);

        return {
            vao: vertexArrayObject,
            attributes: {
                position: this.initPositionAttribute(gl, programInfo, positions),
                colour: this.initColourAttribute(gl, programInfo, colours),
            },
            indices: this.initIndexBuffer(gl, indicesArray),
            numVertices: indicesArray.length,
        };
    }

    createCube(programInfo, position, scale) {
        const positions = new Float32Array([
            0.0, 0.0, 0.0,
            0.0, 0.5, 0.0,
            0.5, 0.5, 0.0,
            0.5, 0.0, 0.0,

            0.0, 0.0, 0.5,
            0.0, 0.5, 0.5,
            0.5, 0.5, 0.5,
            0.5, 0.0, 0.5,

            0.0, 0.5, 0.5,
            0.0, 0.5, 0.0,
            0.5, 0.5, 0.0,
            0.5, 0.5, 0.5,

            0.0, 0.0, 0.5,
            0.5, 0.0, 0.5,
            0.5, 0.0, 0.0,
            0.0, 0.0, 0.0,

            0.5, 0.0, 0.5,
            0.5, 0.0, 0.0,
            0.5, 0.5, 0.5,
            0.5, 0.5, 0.0,

            0.0, 0.0, 0.5,
            0.0, 0.0, 0.0,
            0.0, 0.5, 0.5,
            0.0, 0.5, 0.0
        ]);

        // We have 3 vertices with r, g, b, a colour values
        const colours = new Float32Array([
            0.2, 0.5, 0.2, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,

            1.0, 0.5, 1.0, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,

            1.0, 0.5, 1.0, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,

            1.0, 0.5, 1.0, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,

            1.0, 0.5, 1.0, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,

            1.0, 0.5, 1.0, 1.0,
            1.0, 0.5, 0.2, 1.0,
            0.5, 0.9, 0.0, 1.0,
            0.1, 0.9, 0.8, 1.0,
        ]);

        const indicesArray = new Uint16Array([
            2, 0, 1, 3, 0, 2,
            //backface
            5, 4, 6, 6, 4, 7,
            //top face
            10, 9, 8, 10, 8, 11,
            //bottom face
            13, 12, 14, 14, 12, 15,
            //
            18, 16, 17, 18, 17, 19,

            22, 21, 20, 23, 21, 22,
        ]);

        let buffers = this.initBuffers(this.state.gl, programInfo, positions, colours, indicesArray);
        let rot = mat4.create();
        mat4.identity(rot);

        let centroid = this.calculateCentroid(positions);

        return {
            buffers,
            position,
            scale,
            rotation: rot,
            centroid
        }
    }

    calculateCentroid(vertices) {
        var center = vec3.fromValues(0.0, 0.0, 0.0);
        for (let t = 0; t < vertices.length; t += 3) {
            vec3.add(center, center, vec3.fromValues(vertices[t], vertices[t + 1], vertices[t + 2]));
        }
        vec3.scale(center, center, 1 / (vertices.length / 3));

        return center;
    }

    initPositionAttribute(gl, programInfo, positionArray) {

        // Create a buffer for the positions.
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER, // The kind of buffer this is
            positionArray, // The data in an Array object
            gl.STATIC_DRAW // We are not going to change this data, so it is static
        );

        {
            const numComponents = 3; // pull out 3 values per iteration, ie vec3
            const type = gl.FLOAT; // the data in the buffer is 32bit floats
            const normalize = false; // don't normalize between 0 and 1
            const stride = 0; // how many bytes to get from one set of values to the next
            // Set stride to 0 to use type and numComponents above
            const offset = 0; // how many bytes inside the buffer to start from


            // Set the information WebGL needs to read the buffer properly
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset
            );
            // Tell WebGL to use this attribute
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexPosition);
        }

        return positionBuffer;
    }


    initColourAttribute(gl, programInfo, colourArray) {

        // Create a buffer for the positions.
        const colourBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colourBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER, // The kind of buffer this is
            colourArray, // The data in an Array object
            gl.STATIC_DRAW // We are not going to change this data, so it is static
        );

        {
            const numComponents = 4; // pull out 4 values per iteration, ie vec4
            const type = gl.FLOAT; // the data in the buffer is 32bit floats
            const normalize = false; // don't normalize between 0 and 1
            const stride = 0; // how many bytes to get from one set of values to the next
            // Set stride to 0 to use type and numComponents above
            const offset = 0; // how many bytes inside the buffer to start from

            // Set the information WebGL needs to read the buffer properly
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexColour,
                numComponents,
                type,
                normalize,
                stride,
                offset
            );
            // Tell WebGL to use this attribute
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexColour);
        }

        return colourBuffer;
    }

    initIndexBuffer(gl, elementArray) {

        // Create a buffer for the positions.
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER, // The kind of buffer this is
            elementArray, // The data in an Array object
            gl.STATIC_DRAW // We are not going to change this data, so it is static
        );

        return indexBuffer;
    }

    draw(gl, objects, programInfo, deltaTime) {
        //gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST); // Enable depth testing
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things
        gl.clearDepth(1.0); // Clear everything
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);
        gl.frontFace(gl.CCW);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.useProgram(programInfo.program)

        objects.forEach((object) => {
            {
                mat4.rotateY(object.rotation, object.rotation, deltaTime);
                mat4.rotateX(object.rotation, object.rotation, deltaTime);
                mat4.rotateZ(object.rotation, object.rotation, deltaTime);

                var projectionMatrix = mat4.create();
                var fovy = 60.0 * Math.PI / 180.0; // Vertical field of view in radians
                var aspect = this.state.canvas.clientWidth / this.state.canvas.clientHeight; // Aspect ratio of the canvas
                var near = 0.1; // Near clipping plane
                var far = 100.0; // Far clipping plane

                mat4.perspective(projectionMatrix, fovy, aspect, near, far);

                gl.uniformMatrix4fv(programInfo.uniformLocations.projection, false, projectionMatrix);
                var viewMatrix = mat4.create();
                mat4.lookAt(
                    viewMatrix,
                    this.state.camera.position,
                    this.state.camera.center,
                    this.state.camera.up,
                );

                gl.uniformMatrix4fv(programInfo.uniformLocations.view, false, viewMatrix);
                var modelMatrix = mat4.create();

                var negCentroid = vec3.fromValues(0.0, 0.0, 0.0);
                vec3.negate(negCentroid, object.centroid);

                mat4.translate(modelMatrix, modelMatrix, object.position);
                mat4.translate(modelMatrix, modelMatrix, object.centroid);
                mat4.mul(modelMatrix, modelMatrix, object.rotation);
                
                mat4.scale(modelMatrix, modelMatrix, object.scale);
                mat4.translate(modelMatrix, modelMatrix, negCentroid);

                gl.uniformMatrix4fv(programInfo.uniformLocations.model, false, modelMatrix);
                gl.bindVertexArray(object.buffers.vao);

                // Draw the object
                const offset = 0; // Number of elements to skip before starting

                //if its a mesh then we don't use an index buffer and use drawArrays instead of drawElements
                gl.drawElements(gl.TRIANGLES, object.buffers.numVertices, gl.UNSIGNED_SHORT, offset);
            }
        })
    }

    setup() {
        let programInfo = this.initializeShaderProgram(this.state.gl);

        let objects = [];
        //create centered cube
        let centerCube = this.createCube(programInfo, vec3.fromValues(0, 0, 0), vec3.fromValues(1, 1, 1));
        objects.push(centerCube);

        //create 4 surrounding cubes
        let sCube1 = this.createCube(programInfo, vec3.fromValues(0, 1, 0), vec3.fromValues(1, 1, 1));
        let sCube2 = this.createCube(programInfo, vec3.fromValues(0, -1, 0), vec3.fromValues(1, 1, 1));
        let sCube3 = this.createCube(programInfo, vec3.fromValues(1, 0, 0), vec3.fromValues(1, 1, 1));
        let sCube4 = this.createCube(programInfo, vec3.fromValues(-1, 0, 0), vec3.fromValues(1, 1, 1));
        objects.push(sCube1);
        objects.push(sCube2);
        objects.push(sCube3);
        objects.push(sCube4);

        var then = 0.0;
        var that = this;
        var angle = 0.007;

        // This function is called when we want to render a frame to the canvas
        function render(now) {
            now *= 0.001; // convert to seconds
            const deltaTime = now - then;
            then = now

            //get the surrounding cubes
            let surrounding = objects.slice(1, 5);

            if (Math.floor(now) % 2 === 0) {
                vec3.add(objects[0].scale, objects[0].scale, vec3.fromValues(angle, angle, angle));
                surrounding.forEach((object) => {
                    vec3.add(object.scale, object.scale, vec3.fromValues(-angle, -angle, -angle));
                })
            } else if (Math.floor(now) % 2 !== 0 && objects[0].scale[0] > 0) {
                vec3.add(objects[0].scale, objects[0].scale, vec3.fromValues(-angle, -angle, -angle));
                surrounding.forEach((object) => {
                    vec3.add(object.scale, object.scale, vec3.fromValues(angle, angle, angle));
                })
            }

            // Draw our scene
            that.draw(that.state.gl, objects, programInfo, deltaTime);

            // Request another frame when this one is done
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    }

    render() {
        return (
            <canvas height="750" width="750" ref="glCanvas" />
        )
    }
}