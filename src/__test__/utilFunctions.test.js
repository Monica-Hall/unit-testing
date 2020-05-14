import {shortenText} from "../utils/functions"; 
import {wordCount, attachUserName} from "../../server/utils"; 
import {shortText, longText, posts, users} from "../__data__/testData"; 

test("shortenText will not alter a string under 100 characters", () => {
    expect(shortenText(shortText)).toHaveLength(29);
}); 

test("should shorten text that is over 100 characters and adds 3 periods at the end", () => {
    const shortened = shortenText(longText); 
    expect(shortened).not.toHaveLength(longText.length); 
    expect(shortened.slice(-3)).toBe('...');
}); 


test("wordCount will check if the value of invoking it and passing in our test posts array is equal to 233 words", () => {
    expect(wordCount(posts)).toBe(233); 
}); 

test("attachUserName should check to make sure that passing in users and posts will attach a displayName property to every post", () => {
    const newPosts = attachUserName(users, posts); 
    expect(newPosts[0]).toHaveProperty("displayName"); 
}); 

test("attachUserName removes any posts with no matching user", () => {
    const newPosts = attachUserName(users, posts); 
    const deletedPost = posts[5]; 

    expect(newPosts).not.toContainEqual(deletedPost); 
})


