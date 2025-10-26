import { Component, signal } from '@angular/core';
import { Product } from './product/product';
import { Dashboard } from './dashboard/dash';
import { Profile } from './profile/profile';
import { Works } from "./works/works";
import { Card } from "./card/card";
import { Button } from "./button/button";
import { Box } from "./box/box";
// remove app router outlet

@Component({
  selector: 'app-root',
  imports: [Product, Dashboard, Profile, Works, Card, Button, Box],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = "Angular app"
}
