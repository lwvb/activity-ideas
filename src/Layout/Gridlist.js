import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

class Gridlist extends Component {
    render() {
        return (
            <Grid fluid className="">
                <Row>
                    {React.Children.map(this.props.children, (child) => 
                        <Col xs={12} sm={6} md={4} lg={3}>{child}</Col>
                    )}
                </Row>
            </Grid>
        );
    }
}

export default Gridlist;