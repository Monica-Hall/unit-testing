import React from "react"; 
import {render} from "@testing-library/react"; 
import PostWidget from "../components/PostWidget"; 
import {MemoryRouter} from "react-router-dom"; 
import {shortenText} from "../utils/functions"; 
import {posts} from "../__data__/testData"; 

const longPost = posts[0]; 
const post = posts[1]; 

it("renders out the post", () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>
    ); 

    expect(container.textContent).toContain(post.text); 
}); 


it("longPost will shorten the displayed text by default", () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    ); 

    expect(container.textContent).toContain(shortenText(longPost.text)); 
}); 

it('displays all text when expanded is true', () => {
    const { container } = render(
      <MemoryRouter>
        <PostWidget expanded={true} {...longPost} />
      </MemoryRouter>,
    );
  
    expect(container.textContent).toContain(longPost.text);
  });