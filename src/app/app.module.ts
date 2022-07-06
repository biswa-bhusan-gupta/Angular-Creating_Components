import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component"; // IMPORTING SERVER COMPONENT

@NgModule({
  declarations: [AppComponent, ServerComponent], // ADDING SERVER COMPONENT IN APP MODULE
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
