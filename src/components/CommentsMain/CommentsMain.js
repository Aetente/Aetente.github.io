import React from 'react';
import './components.css'
import './main.css'
import { connect } from "react-redux";
import {
  addPostComment,
  upVote,
  downVote,
  addComment,
  commentToComment
} from "../../actions";

let commentsToAddTo = -1;

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            commentsToAddTo: -1,
            showCommentsFor: -1,
            commentToComment: 'null'
        }
    }

    loadComments = (holdComments,a,commentId,holdIndex) =>{
        a+=1;

        let res = "";
        let subComment;
        if(holdComments.length>0){
            subComment = holdComments.map((comment,index)=>{
                holdIndex+=index;
                let nowKey = 'c-'+a+"-"+index+"-"+holdIndex;
                res = (
                    <div id={nowKey} key={nowKey}>
                        <span className="highlight-username">{comment.author}:</span> {comment.text}
                        <span
                            className='to-bold pointable  text-btn'
                            onClick={()=>{
                                this.setState({commentToComment:nowKey})
                            }}
                        > reply </span>
                        {
                            this.state.commentToComment==nowKey?
                            (
                            <div>
                                <form onSubmit={
                                    (e)=>{
                                        let input = document.getElementById("comment-to-comment");
                                        e.preventDefault();
                                        if (!input.value.trim()) {
                                            return
                                        }
                                        this.props.commentToComment(commentId,{text:input.value,sub:[],author:this.props.match.params.login},nowKey);
                                        input.value='';
                                        this.setState({commentToComment:'null'});
                                    }
                                }>
                                    <input id="comment-to-comment"/>
                                    <button>SUBMIT</button>
                                    <button onClick={()=>{this.setState({commentToComment:'null'})}}>CANCEL</button>
                                </form>
                            </div>
                           )
                       :""
                        }
                        <div className='sub-comment'>
                            {this.loadComments(comment.sub,a,commentId,holdIndex)}
                        </div>

                    </div>
                )
                return res;
            })
        }
        return subComment;
    }

    render(){
        return (

        <div>
            {
                this.props.comments.map(comment=>
                <div className='comment-body'  key={comment.id} >
                   <div className='hold-comment'>
                       <div className="c1">
                           <span className='pointable' onClick={()=>(this.props.upVote(comment.id,this.props.match.params.login))}>&#x25B2;</span>
                           <p className='comment-p'>{comment.score}</p>
                           <span className='pointable' onClick={()=>(this.props.downVote(comment.id,this.props.match.params.login))}>&#x25BC;</span>
                       </div>
                       <div className="c2">
                           {
                                comment.image?
                                <img className='imag-stuff comment-p' src={comment.image} alt='no image'/>:
                                <p>no image</p>
                           }
                           {/* <img className='comment-p' src={comment.image} alt='no image'/> */}
                       </div>
                       <div className="c3">
                           <p className='comment-p to-bold highlight-title'>{comment.title}</p>
                           <p className='comment-p submitted'>submitted on {comment.date} by <span className="highlight-username">{comment.username}</span></p>
                           <p className='comment-p'>{comment.comments.length} comments</p>
                           <span className='to-bold text-btn pointable' onClick = {()=>{
                                        if(this.state.commentsToAddTo==comment.id){
                                            this.setState({commentsToAddTo:-1})
                                        }
                                        else{
                                            this.setState({
                                                commentsToAddTo:comment.id,
                                                showCommentsFor:comment.id})
                                        }
                                    }
                                }
                            >
                               Add comment</span>

                       <span className='to-bold text-btn pointable' onClick = {()=>{
                                        if(this.state.showCommentsFor==comment.id){
                                            this.setState({showCommentsFor:-1})
                                        }
                                        else{
                                            this.setState({showCommentsFor:comment.id,
                                            commentsToAddTo:-1})
                                        }
                                    }
                                }
                            >
                               Show comments</span>
                       </div>
                    </div>
                    {

                       this.state.commentsToAddTo==comment.id?(
                            <div>
                                <form onSubmit={
                                    (e)=>{
                                        let input = document.getElementById("comment-adder");
                                        e.preventDefault();
                                        if (!input.value.trim()) {
                                            return
                                        }
                                        this.props.addComment(comment.id,{text:input.value,sub:[],author:this.props.match.params.login});
                                        input.value='';
                                        this.setState({
                                            showCommentsFor:comment.id,
                                            commentsToAddTo:-1
                                            });
                                    }
                                }>
                                    <input id="comment-adder"/>
                                    <button>SUBMIT</button>
                                    <button onClick={()=>{this.setState({
                                            commentsToAddTo:-1
                                        })
                                    }}>CANCEL</button>
                                </form>
                            </div>
                           )
                       :""
                    }
                    {

                       this.state.commentsToAddTo==comment.id||this.state.showCommentsFor==comment.id?
                       this.loadComments(comment.comments,0,comment.id,"")
                       :""

                    }
                   </div>
                )
            }
        </div>
    )
    }
}

let mapStateToProps = (state) => {
  return {comments: state.comments}
}

 export default connect(mapStateToProps, {
   addPostComment,
   upVote,
   downVote,
   addComment,
   commentToComment
 })(Main);
