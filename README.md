# v-simple-image-input
A simple wrapper for image upload input in vue js.

## Installation
`npm i v-simple-image-input`

### Browser
Include the script file, then install the component with Vue.use(SimpleImageInput); e.g.:

```
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/v-simple-image-input/dist/index.min.js"></script>
<script type="text/javascript">
  Vue.use(SimpleImageInput);
</script>
``` 

### Module
`import SimpleImageInput from 'v-simple-image-input';`


### Usage
```
<simple-image-input 
  input-name="featured_image" 
  label="Upload Featured Image" 
  v-model="form.featured_image" 
  @change="(image)=>{form.featured_image = image}">
</simple-image-input>
```
