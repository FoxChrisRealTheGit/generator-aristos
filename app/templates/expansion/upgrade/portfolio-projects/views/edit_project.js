<%- include("../../../../important/admin/views/_layouts/adminheader") %>
    <h2 class="admin-page__main-title">edit portfolio project</h2>
    <% include ../../../../important/admin/views/_layouts/messages/errors %>
    <% include ../../../../important/admin/views/_layouts/messages/messages %>
    <button class="admin-button admin-button--add-something"> 
        <a  href="/admin/portfolio">
            <i class="fa fa-hand-point-left"></i>
        </a>
    </button>
    <br>
    <br>

    <form method="post" action="/admin/portfolio/edit-project/<%= id %>" enctype="multipart/form-data" class="admin-form">

<%- include ../../../../important/AristosStuff/AristosTextEditor/AristosTextEditor %>
<div class="admin-form__form-options--bottom-group">
<div class="admin-form__form-options">
        <div class="admin-form__group">
            <label for="">Title</label>
            <input type="text" class="form-control" name="title" value="<%= title %>" placeholder="Title">

        </div>  
        <div class="admin-form__group">
            <label for="">Category</label>
            <select name="category" class="form-control">
                <% categories.forEach(function(category){ %>
                    <option value="<%= category.slug %>" <% if (category.slug === selectedCat) { %>
                        selected = "selected"
                        <% } %>
                            >
                            <%= category.title %>
                    </option>
                    <% }); %>
            </select>
        </div>

        

       
        <div class="admin-form__group">
            <label for="">Current Image</label>
            <p>
                <% if(image == "") { %>
                    <img id="noimage" src="/noimage.png" alt="">
                    <% } else { %>
                        <img id="noimage" class="add-media-preview-image" src="/portfolio_images/<%= id %>/<%= image %>" alt="">
                        <% } %>
            </p>

        </div>
        <div class="admin-form__group">
            <label for="">Upload Image</label>
            <input type="file" class="form-control" name="image" id="img">
            <img src="#" id="imgPreview" alt="">

        </div>
        <input type="hidden" name="pimage" value="<%= image %>">
        </div>
        <div class="admin-form__form-options admin-form__form-options--second-group">
                <div class="admin-form__group">
                    <label for="">Meta Description</label>
                    <textarea class="admin-form--disabled-resize" rows="4" name="description" placeholder="Place a brief description of this blog. Max of 320 characters including spaces."
                        maxlength="320"><%= description %></textarea>
                </div>
                <div class="admin-form__group">
                    <label for="">Meta Keywords</label>
                    <textarea class="admin-form--disabled-resize" rows="4" name="keywords" placeholder="Place your keywords seperated by a comma. Max of 300 characters. EX. neat blog, neater topic, neatest person"
                        maxlength="300"><%= keywords %></textarea>
                </div>

            
        </div>
</div>
    

        <button class="admin-button admin-button--submit">Submit</button>

    </form>

    <h3 class="admin-page__main-title">Gallery</h3>
    <ul class="gallery">
        <% galleryImages.forEach(function(image){ %>
            <% if (image !== "thumbs") { %>
                <li>
                    <img src="/images/product_images/<%= id %>/gallery/thumbs/<%= image %>" alt="">&nbsp;
                    <a class="confirmDeletion" href="/admin/products/delete-image/<%= image %>?id=<%= id %>">delete</a>
                </li>
                <% } %>
                    <% }); %>
    </ul>

    <form action="/admin/products/product-gallery/<%= id %>" method="post" enctype="multipart/form-data" class="dropzone" id="dropzoneForm">
        <div class="fallback">
            <input type="file" name="file" multiple>
            <input type="submit" value="upload">
        </div>
    </form>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/basic.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js"></script>

    <script>
        // Preview Image
        function readURL(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();

                reader.onload = function (e) {
                    $("#imgPreview").attr("src", e.target.result).width(100).height(100);
                }
                reader.readAsDataURL(input.files[0])
            }
        }

        $("#img").change(function () {
            readURL(this);
        })


        // Dropzone
        Dropzone.options.dropzoneForm = {
            acceptedFiles: "image/*",
            init: function () {
                this.on("queuecomplete", function (file) {
                    setTimeout(() => {
                        location.reload()
                    }, 1000);
                })
            }
        }
        

    </script>
  <%- include("../../../../important/admin/views/_layouts/adminfooter") %>
