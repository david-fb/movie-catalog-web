<script setup>
function addFavotire(){
    alert('added to favorites')
}
</script>
<template>
<svg version="1.1" id="Layer_1" x="0px" y="0px" @click="addFavotire"
	 viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 476.213 476.213;" fill="#f6c434" xml:space="preserve">
<polygon points="36.213,461.213 461.213,461.213 461.213,36.213"/>
<path d="M476.213,476.213H0L476.213,0V476.213z M72.427,446.213h373.787V72.427L72.427,446.213z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

<span>+</span>

</template>
<style lang="scss" scoped>
    svg {
        pointer-events: none;
    }
    polygon {
        pointer-events: fill;
        cursor: pointer;
    }
    span {
        position: absolute;
        bottom: 0;
        right: 8px;
        font-size: 20px;
        font-weight: 500;
        pointer-events: none;
    }
</style>