import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MeetPage } from '../pages/meet/meet';
import { ChatPage } from '../pages/chat/chat';
import { FeedPage } from '../pages/feed/feed';
import { MePage } from '../pages/me/me';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/loginpage/loginpage';

import { ProfileComponent } from '../components/profile/profile';
import { ChatpageComponent } from '../components/chatpage/chatpage';
import { CommentsComponent } from '../components/comments/comments';
import { EditprofileComponent } from '../components/editprofile/editprofile';
import { NotificationsComponent } from '../components/notifications/notifications';
import { ViewsComponent } from '../components/views/views';
import { FriendsComponent } from '../components/friends/friends';
import { MatchesComponent } from '../components/matches/matches';
import { FiltersComponent } from '../components/filters/filters';
import { PushnotificationsComponent } from '../components/pushnotifications/pushnotifications';
import { DeleteaccountComponent } from '../components/deleteaccount/deleteaccount';
import { FeedpostComponent } from '../components/feedpost/feedpost';
import { ImageModalComponent } from '../components/image-modal/image-modal';


@NgModule({
  declarations: [
    MyApp,
    MeetPage,
    ChatPage,
    FeedPage,
    MePage,
    SettingsPage,
    TabsPage,
    LoginPage,
    ProfileComponent,
    ChatpageComponent,
    CommentsComponent,
    EditprofileComponent,
    NotificationsComponent,
    ViewsComponent,
    FriendsComponent,
    MatchesComponent,
    FiltersComponent,
    PushnotificationsComponent,
    DeleteaccountComponent,
    FeedpostComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MeetPage,
    ChatPage,
    FeedPage,
    MePage,
    SettingsPage,
    TabsPage,
    LoginPage,
    ProfileComponent,
    ChatpageComponent,
    CommentsComponent,
    EditprofileComponent,
    NotificationsComponent,
    ViewsComponent,
    FriendsComponent,
    MatchesComponent,
    FiltersComponent,
    PushnotificationsComponent,
    DeleteaccountComponent,
    FeedpostComponent,
    ImageModalComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
