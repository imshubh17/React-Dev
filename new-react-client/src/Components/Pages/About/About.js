import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
//import Markdown from '../../Tools/Markdown';
import post1 from './blog-post.1.md';
import Markdown from "markdown-to-jsx";
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));
  const styles = (theme) => ({
    listItem: {
      marginTop: theme.spacing(1),
    },
  });
  const options = {
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h5',
        },
      },
      h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
      h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
      h4: {
        component: Typography,
        props: { gutterBottom: true, variant: 'caption', paragraph: true },
      },
      p: { component: Typography, props: { paragraph: true } },
      a: { component: Link },
      li: {
        component: withStyles(styles)(({ classes, ...props }) => (
          <li className={classes.listItem}>
            <Typography component="span" {...props} />
          </li>
        )),
      },
    },
  };

export default function About() {
    const classes = useStyles();
    const [markdown,setMarkdown] = useState('');
    fetch(post1).then(res => res.text()).then(text => setMarkdown(text));
    return (
        
            <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
      About Us :-
      </Typography>
      <Divider />      
       {/*posts.map((post) => (
        <Markdown className={classes.markdown}  key={post.substring(0, 40)}>
          {post}
        </Markdown>
       ))*/}
       <Markdown options={options}>
            {markdown}
       </Markdown>
     
    </Grid>
     
    )
}
