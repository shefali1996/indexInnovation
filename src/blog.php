<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>CKEditor</title>
  <script src="https://cdn.ckeditor.com/4.13.0/standard/ckeditor.js"></script>
</head>

<body>
  <h3>English Version</h3>
  <input type="text" name="banner_en">  
  <input type="text" name="title_en">
  <textarea name="content_en"></textarea>
  <script>
    CKEDITOR.replace( 'content_en' );
  </script>
  <h3>CN Version</h3>
  <input type="text" name="banner_cn">  
  <input type="text" name="title_cn">
  <textarea name="content_cn"></textarea>
  <script>
    CKEDITOR.replace( 'content_cn' );
  </script>

  <h3>HK Version</h3>
  <input type="text" name="banner_hk">  
  <input type="text" name="title_hk">
  <textarea name="content_hk"></textarea>
  <script>
    CKEDITOR.replace( 'content_hk' );
  </script>
  <button>Submit</button>
</body>

</html>