# v-simple-image-upload
A simple wrapper for image upload input in vue js.


# Getting started

## Installation

```
npm i v-simple-image-upload
```

## Usage
```javascript
import Vue from 'vue';
import SimpleImageInput from 'v-simple-image-upload';
 
Vue.use(SimpleImageInput);

<simple-image-input 
  input-name="featured_image" 
  v-model="values.featured_image" 
  @change="(image)=>{values.featured_image = image}">
</simple-image-input>
```
