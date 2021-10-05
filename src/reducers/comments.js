let state2 = [];

export function findUserIncomment(comment,name){
    let found = false;
    comment.usersLiked.map(user=>{
        if(user==name){
            found=true;
            return
        }
    })
    return found;
}

export function putCommentInComment(holder,gotComment,key,a,commentArr,holdIndex){
    a+=1;
    if(holder.length>0){
        holder.map((comment,index)=>{
            holdIndex+=index;
            let gotKey = 'c-'+a+'-'+index+'-'+holdIndex;
            if(a==1){
                commentArr.push(comment);
            }
            if(key==gotKey){
                commentArr[index].sub.push(gotComment);
            }

            putCommentInComment(comment.sub,gotComment,key,a,commentArr[index].sub,holdIndex);
        })
    }
    return commentArr;
}


const comments = (state = [],action) => {
    switch(action.type){
        case 'ADD_POST_COMMENT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    date: action.payload.date,
                    username: action.payload.username,
                    comments: [],
                    score: 0,
                    usersLiked: []
                }
            ]
        case 'VOTE_UP':
            state2 = [];
            // let found = findVotedcommentsInUser(action.payload.id,action.payload.name,state);

            state.map((comment)=>{
                if(comment.id==action.payload.id&&!findUserIncomment(comment,action.payload.name)){
                    comment.score+=1;
                    comment.usersLiked.push(action.payload.name)
                }
                state2.push(comment);
            });
            return state2;
        case 'VOTE_DOWN':
            state2 = [];
            state.map((comment)=>{
                if(comment.id==action.payload.id&&!findUserIncomment(comment,action.payload.name)){
                    comment.score-=1;
                    comment.usersLiked.push(action.payload.name)
                }
                state2.push(comment);
            });
            return state2;
        case 'ADD_COMMENT':
            state2=[];
            state.map((comment)=>{
                if(comment.id==action.payload.id){
                    comment.comments.push(action.payload.comment);
                }
                state2.push(comment);
            });
            return state2;
        case 'ADD_SUB_COMMENT':
            state2=[];
            state.map((comment)=>{
                if(comment.id==action.payload.id){

                    comment.comments = putCommentInComment(comment.comments,action.payload.gotComment,action.payload.key,0,[],"");
                }
                state2.push(comment);
            })
            return state2;
        default:
            return state;
    }
}

export default comments;
