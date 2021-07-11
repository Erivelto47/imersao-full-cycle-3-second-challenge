import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Route} from "./route";

@Controller("routes")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Route[] {
    return this.appService.getRoutes();
  }
}
