import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_IS_STACKBLITZ = tuiCreateTokenFromFactory(() =>
    inject(WINDOW).location.host.endsWith('stackblitz.io'),
);
