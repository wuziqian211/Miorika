import 'live2d-widgets/dist/waifu.css';
import { initWidget } from 'live2d-widgets/src/widget.ts';

import waifuPath from 'live2d-widgets/dist/waifu-tips.json?url';
import cubism2Path from 'live2d-widgets/dist/live2d.min.js?url';

if (screen.width >= 768) {
  initWidget({
    waifuPath,
    cubism2Path,
    cubism5Path: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js',
    tools: ['hitokoto', 'asteroids', 'switch-model', 'switch-texture', 'photo', 'info', 'quit'],
    logLevel: 'warn',
    drag: true,
  });
}
