import React from 'react'; //eslint-disable-line
import Avatar from './Avatar';

const IMG_SAMPLE_URL  = "https://avatarfiles.alphacoders.com/798/79835.gif";
const badgeSample = <div style={{width: 10, height: 10, background: "green", borderRadius:"50%"}}></div>;
const customContentSample = <div style={{ width: "100%", height: 17, background: "white", position:"absolute", bottom:0, textAlign:"center" }}>online</div>;

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Avatar', module)
    .add('default', () => (
      <Avatar />
    ))
    .add('size', () => (
      <Avatar size={100}/>
    ))
    .add('borders', () => (
      <Avatar borderColor="red" borderRadius={0} borderWidth={5}/>
    ))
    .add('letter avatar', () => (
      <Avatar text backgroundColor="beige">AM</Avatar>
    ))
    .add('with shadow', () => (
      <Avatar shadow />
    ))
    .add('css filters', () => (
      <Avatar grayscale blur invert/>
    ))
    .add('heavy img with loader', () => (
      <Avatar src={IMG_SAMPLE_URL}/>
    ))
    .add('with badge', () => (
      <Avatar badge={badgeSample} />
    ))
    .add('with custom content', () => (
      <Avatar borderRadius={0} borderWidth={1}>{customContentSample}</Avatar>
    ))



};
