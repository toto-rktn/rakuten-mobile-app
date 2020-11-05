import React from 'react'
import Content from './Content'

/*
 * props.contents looks like
 * [
 *      {
 *          title: "International Call",
 *          price: 500,
 *          description: "You can make a call in 66 countries",
 *          selected: false,
 *          iconImg: ${img file object comes here} 
 *      }, ...
 * ] 
 */
const contents = (props) => {
    return props.contents.map((content) => {
        return <Content 
                    title={props.title}
                    icon={content.image}
                    content={content}
                    key={Math.random()}/>
    })
}


export default contents