import React, { Component } from 'react'
import Components from '../Components/index';
import { Grid, Pagination, Transition } from 'semantic-ui-react';
import blogPosts from '../Resources/blogs/index';

class Blog extends Component {
    constructor(props) {
        super();

        this.state = {
            currentPage: 1
        }

        this.createBlogPosts = this.createBlogPosts.bind(this);
        this.renderCurrentBlog = this.renderCurrentBlog.bind(this);
        this.textGetLinks = this.textGetLinks.bind(this);
    }

    createBlogPosts() {
        blogPosts.sort((a, b) => {
            return new Date(b.date.split("-")) - new Date(a.date.split("-"));
        })
        this.setState({
            blogPosts: blogPosts
        })
    }

    handlePaginationClick = (e, data) => {
        this.setState({ loadAnimationVisible: false }, () => {
            setTimeout(() => {
                this.setState({ currentPage: data.activePage, loadAnimationVisible: true })
            }, 300)
        })
    }

    /**
     * 
     * @param {Object} text -> represents the object containing the text information from the json file 
     * This function checks for links in the text string and handles it accordingly by inserting links into the text
     */
    textGetLinks(text) {
        let link;

        for (let i = 0; i < this.state.blogPosts[this.state.currentPage - 1].links.length; i++) {
            if (this.state.blogPosts[this.state.currentPage - 1].links[i].id === text.link) {
                link = this.state.blogPosts[this.state.currentPage - 1].links[i];
            }
        }
        let index = text.text.indexOf('$link');
        return (<p>{text.text.substring(0, index)}<a href={link.linkref}>{link.linktext}</a>{text.text.substring(index + 5, text.text.length)}</p>);
    }

    getSubtitleContentLayout(post) {
        let overallArr = [];
        post.subtitles.map((subtitle, index) => {
            overallArr.push(
                <Grid.Row key={index + "subtitle"} className="AppRow">
                    <Grid.Column style={{ marginBottom: '10px' }} width={16}>
                        <h3>{subtitle.title}</h3>
                    </Grid.Column>
                    {post.content.map((text) => {
                        if (text.parent === subtitle.index) {
                            return (
                                <Grid.Column style={{ marginBottom: '5px' }} key={"text" + text.text.length} width={16}>
                                    {text.link ? this.textGetLinks(text) : <p>{text.text}</p>}
                                </Grid.Column>
                            )
                        } else {
                            return null;
                        }
                    })}
                </Grid.Row>)
            return index;
        })
        return overallArr;
    }

    renderCurrentBlog(index) {
        let pageLayout = (
            <Grid>
                <Grid.Row className="AppRow">
                    <Grid.Column width={16}>
                        <center><h2>{this.state.blogPosts[index].title}</h2></center>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <center><h4>{new Date(this.state.blogPosts[index].date.split("-")).toDateString()}</h4></center>
                    </Grid.Column>
                </Grid.Row>
                {this.getSubtitleContentLayout(this.state.blogPosts[index])}
            </Grid>
        )
        return pageLayout;
    }
    componentWillMount() {
        this.setState({ loadAnimationVisible: false })
    }

    componentDidMount() {
        this.createBlogPosts();
        this.setState({ loadAnimationVisible: true })
    }

    render() {
        if (this.state.blogPosts && this.state.blogPosts.length > 0) {
            return (
                <Grid centered className="App">
                    <Components.MyHeader />
                    <Transition visible={this.state.loadAnimationVisible} animation="fade" duration={300}>
                        <Grid centered>

                            <Grid.Row className="GridRow" columns={'equal'} textAlign={"center"} style={{ marginBottom: "200px" }}>
                                <Grid.Column>
                                    {this.renderCurrentBlog(this.state.currentPage - 1)}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <center>
                                        <Pagination defaultActivePage={1} totalPages={this.state.blogPosts.length} onPageChange={this.handlePaginationClick} />
                                    </center>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Components.Footer />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Transition>
                </Grid >
            )
        } else {
            return (
                <p>Loading..</p>
            )
        }
    }
}

export default Blog;