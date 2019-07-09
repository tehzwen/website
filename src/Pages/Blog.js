import React, { Component } from 'react'
import Components from '../Components/index';
import { Grid, Pagination } from 'semantic-ui-react';
import blogPosts from '../Resources/blogs/index';

class Blog extends Component {
    constructor(props) {
        super();

        this.state = {
            currentPage: 1
        }

        this.createBlogPosts = this.createBlogPosts.bind(this);
        this.renderCurrentBlog = this.renderCurrentBlog.bind(this);
    }

    createBlogPosts() {
        this.setState({
            blogPosts: blogPosts
        })
    }

    handlePaginationClick = (e, data) => {
        this.setState({ currentPage: data.activePage })
    }

    getSubtitleContentLayout(post) {
        let overallArr = [];

        post.subtitles.map((subtitle, index) => {
            overallArr.push(
                <Grid.Row key={index + "subtitle"} className="AppRow">
                    <Grid.Column style={{marginBottom:'10px'}} width={16}>
                        <h3>{subtitle.title}</h3>
                    </Grid.Column>
                    {post.content.map((text) => {
                        if (text.parent === subtitle.index) {
                            return (
                                <Grid.Column style={{marginBottom:'5px'}} key={"text" + text.text.length} width={16}>
                                    <p>{text.text}</p>
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
            <Grid textAlign="center">
                <Grid.Row className="AppRow">
                    <Grid.Column width={16}>
                        <h2>{this.state.blogPosts[index].title}</h2>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <h4>{new Date(this.state.blogPosts[index].date).toDateString()}</h4>
                    </Grid.Column>
                </Grid.Row>

                {this.getSubtitleContentLayout(this.state.blogPosts[index])}
            </Grid>
        )
        return pageLayout;
    }

    componentDidMount() {
        this.createBlogPosts();
    }

    render() {
        if (this.state.blogPosts && this.state.blogPosts.length > 0) {
            return (
                <Grid centered className="App">
                    <Components.MyHeader />
                    <Grid.Row className="GridRow" columns={'equal'} textAlign={"center"} style={{ marginBottom: "250px" }}>
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