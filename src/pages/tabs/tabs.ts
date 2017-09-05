import { Component } from '@angular/core';


import {MeetPage} from '../meet/meet';
import {ChatPage} from '../chat/chat';
import {FeedPage} from '../feed/feed';
import {MePage} from '../me/me';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MeetPage;
  tab2Root: any = ChatPage;
  tab3Root: any = FeedPage;
  tab4Root: any = MePage;
  tab5Root: any = SettingsPage;

  constructor() {

  }
}
