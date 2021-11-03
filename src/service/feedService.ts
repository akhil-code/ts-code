import {Post, Feed, Profile} from '../models';

/**
 * Generates news feed for given user
 * @param user target user
 * @returns {@link NewsFeed}
 */
export function generateNewsFeed (profile: Profile): Feed {
    // step - 1: get following list
    let followingList = getFollowingList(profile);
    // step - 2: for each of the followers get all the posts
    let allPosts : Post[] = [];
    followingList.forEach(followee => {
        let followeePosts = getPostsOfUser(followee);
        followeePosts.forEach(post => allPosts.push(post));
    })
    // step - 3: sort posts based on post creation timestamp.
    // TODO - write a sorter.
    // step - 4: Create news feed with list of posts and return.
    return {
        posts : allPosts
    };
}

/**
 * Provides users which are followed by target.
 * @param user target user
 * @returns list of following
 */
function getFollowingList(profile: Profile) : Profile[] {
    let followingList : Profile[] = [];
    return followingList;
}

function getPostsOfUser(user: Profile) : Post[]{
    let posts : Post[] = [];
    return posts;
}