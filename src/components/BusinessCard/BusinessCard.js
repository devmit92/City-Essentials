import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const styles = (theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: orange[500],
        },
    });



class BusinessCard extends Component {

    state = {
        expanded: false,
    }

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                            KC
            </Avatar>
                    }
                    title={this.props.business.business_name}
                    subheader={this.props.business.category}
                />
                <CardMedia
                    className={this.props.classes.media}
                    image={`/images/${this.props.business.image_path}`}
                    title="Paella dish"
                />
                <CardContent>
                    {this.props.business.about}
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(this.props.classes.expand, {
                            [this.props.classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.business.address}
                            <br />
                            {this.props.business.city_name}
                            <br />
                            {this.props.business.phone_number}
                            <br />
                            {this.props.business.hours}
                            <br />
                            <a href={this.props.business.website}>{this.props.business.website}</a>
                            <button onClick={() => { this.props.dispatch({ type: 'POST_BUSINESS_LIKES', payload: this.props.business.businesses_id }) }}>Star!</button>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    businesses: state.businesses
});

export default connect(mapStateToProps)(withStyles(styles)(BusinessCard));
