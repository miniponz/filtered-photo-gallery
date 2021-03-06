import './html-equal.js';
import filterImages from '../src/filter-images.js';

const test = QUnit.test;

//make array of images

const images = [
    { title: 'unicorn', keyword: 'unicorn', horns: 1 },
    { title: 'double unicorn', keyword: 'unicorn', horns: 2 },
    { title: 'triceratops', keyword: 'dinosaur', horns: 3 }
];

test('filter only displays images with matching keyword of unicorn', assert => {
//arrange

    let filter = { keyword: 'unicorn' };
//act
    let filtered = filterImages(images, filter);

//assert
    assert.deepEqual(filtered, [
        { title: 'unicorn', keyword: 'unicorn', horns: 1 },
        { title: 'double unicorn', keyword: 'unicorn', horns: 2 }
    ]);
});

test('no keyword filter returns all images', assert => {
    //arrange
    const filter = { keyword: '' };

    //act
    let filtered = filterImages(images, filter);

    //assert
    assert.deepEqual(filtered, images);
});

test('filter only displays images with matching horn number', assert => {
    //arrange
    let filter = { horns: '2' };

    //act
    let filtered = filterImages(images, filter);
    //assert
    assert.deepEqual(filtered, [
        { title: 'double unicorn', keyword: 'unicorn', horns: 2 },
        { title: 'triceratops', keyword: 'dinosaur', horns: 3 }
    ]);
});