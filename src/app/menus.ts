import {GeneralComponent} from './account/general/general.component';
import {KeysComponent} from './account/keys/keys.component';
import {GuideComponent} from './guide/guide.component';

export const menus = [
  {title: '가이드', path: '', component: GuideComponent, pathMatch: 'full'},
  {title: '기본정보', path: 'general', component: GeneralComponent},
  {title: '키 관리', path: 'keys', component: KeysComponent},
  // {title: '팀 관리', path: 'account/keys', component: KeysComponent},
  // {title: '결제 관리', path: 'account/keys', component: KeysComponent},
  // {title: '크레딧', path: 'account/keys', component: KeysComponent},
  // {path: '**', component: PageNotFoundComponent},
];
