Tinytest.add('test environment', function (test) {
  test.isTrue(
    typeof FormData !== 'undefined',
    'test environment not initialized `FormData`'
  );
});
