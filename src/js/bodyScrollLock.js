import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const disableBodyScroll = _disableBodyScroll;
const enableBodyScroll = _enableBodyScroll;

const targetElement = document.querySelector('.mobile-menu');

disableBodyScroll(targetElement);
enableBodyScroll(targetElement);