import $ from 'jquery';
import {createBookReview} from './createBookReview'
import { Review } from "./appendBook";

describe('createBookReview()', () => {
    const review:Review = {
        id: 1,
        username: 'ユーザー',
        comment: 'この本はとても面白かったし学びも多い1冊でした',
        like: 3
    }

    // 解説：レビューコメントが一致しているか
    test('should return DOM element', ()=>{
        document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`;
        expect($('.review__list__item').length).toBe(1);
    })

    // 解説：いいねの数が一致しているか
    test('should match like count', ()=>{
        document.body.innerHTML = `<ul>${createBookReview(review)}</ul>`;
        expect($('.review__list__item__like__button').text()).toBe(`❤️ ${review.like}件`);
    });

    // 解説：

});