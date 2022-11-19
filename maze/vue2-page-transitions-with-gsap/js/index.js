 // State
var state = {
	animations: ['fizade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
	view: 'slide'


	// Controls
};var controls = Vue.component('controls', {
	template: '#controls',
	data: state,
	methods: {
		setView: function setView(animation) {
			state.view = animation;
		} } });



// Transitions
var fade = Vue.component('fizade', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5 },
			{
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done });

		},
		leave: function leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1 },
			{
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



var slide = Vue.component('slide', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				x: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%' });


			tl.to(el, 0.5, {
				x: 0,
				ease: Power4.easeOut });


			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1 },
			{
				autoAlpha: 0,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



var slideUp = Vue.component('slideUp', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				y: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%' });


			tl.to(el, 0.5, {
				y: 0,
				ease: Power4.easeOut });


			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.to(el, 1, {
				y: window.innerHeight * -1.5,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



var zoom = Vue.component('zoom', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				autoAlpha: 0,
				scale: 2,
				transformOrigin: '50% 50%' });


			tl.to(el, 1, {
				autoAlpha: 1,
				scale: 1,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



var flipX = Vue.component('flipX', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%' });


			tl.to(el, 1, {
				autoAlpha: 1,
				rotationX: 0,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



var flipY = Vue.component('flipY', {
	template: '#page',
	methods: {
		enter: function enter(el, done) {
			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				autoAlpha: 0,
				rotationY: 90,
				transformOrigin: '50% 50%' });


			tl.to(el, 1, {
				autoAlpha: 1,
				rotationY: 0,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.to(el, 1, {
				scale: 0,
				ease: Power4.easeOut,
				onComplete: done });

		} } });



// App
var app = new Vue({
	el: '#app',
	data: function data() {
		return state;
	} });