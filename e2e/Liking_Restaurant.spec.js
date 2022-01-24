/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item-button');

  const firstRestoran = locate('.restaurant-item-title');
  const firstRestoranName = await I.grabTextFrom(firstRestoran);
  I.click(locate('.restaurant-item-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestoranName = await I.grabTextFrom('.restaurant-item-title');

  assert.strictEqual(firstRestoranName, likedRestoranName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item-button');

  const firstRestoran = locate('.restaurant-item-title');
  const firstRestoranName = await I.grabTextFrom(firstRestoran);
  I.click(locate('.restaurant-item-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestoranName = await I.grabTextFrom('.restaurant-item-title');

  assert.strictEqual(firstRestoranName, likedRestoranName);

  I.seeElement('.restaurant-item-button');
  I.click(locate('.restaurant-item-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.restaurant-item-button');
});
