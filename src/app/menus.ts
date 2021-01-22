import {GeneralComponent} from './account/general/general.component';
import {KeyComponent} from './account/key/key.component';
import {GuideComponent} from './guide/guide.component';

export const menus = [
  {title: '가이드', path: 'guide', component: GuideComponent},
  {title: '마이페이지 > 기본정보', path: 'account/general', component: GeneralComponent},
  {title: '마이페이지 > Keys', path: 'account/key', component: KeyComponent},
  // {path: '**', component: PageNotFoundComponent},
];
