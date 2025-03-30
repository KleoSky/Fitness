const playerButton = document.querySelector('.about__play-button');
const iframeContainer = document.querySelector('.about__iframe-container');
const previewPicture = document.querySelector('.about__video');
const videoSrc = `https://rutube.ru/video/04e30be8a48ab6daf80045dbcdde3be5/`;

const initVideo = () => {
  const renderIframe = () => {
    const iframe = document.createElement('iframe');
    iframe.src = videoSrc;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.allowFullscreen = true;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    return iframe;
  }

  playerButton.addEventListener('click', function () {
    const iframe = renderIframe();
    previewPicture.style.display = 'none';
    playerButton.style.display = 'none';
    iframeContainer.appendChild(iframe);
  })
}

export {initVideo};
