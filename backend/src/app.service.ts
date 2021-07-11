import {Injectable} from '@nestjs/common';
import {Route} from "./route";

@Injectable()
export class AppService {

  private routes: Route[];

  getRoutes(): Route[] {
    return this.routesPopulator();
  }


  private routesPopulator(): Route[] {
    return this.routes = [
        new Route("AC-AL", {latitude: -8.77, longitude: -70.55} , {latitude: -9.71, longitude: -35.73}),
      new Route("AM-AP", {latitude: -3.07, longitude: -61.66}, {latitude: 1.41, longitude: -51.77}),
      new Route("BA-CE", {latitude: -12.96, longitude: -38.51}, {latitude: -3.71, longitude: -38.54}),
      new Route("DF-ES", {latitude: -15.83, longitude: -47.86}, {latitude: -19.19, longitude: -40.34}),
      new Route("GO-MA", {latitude: -16.64, longitude: -49.31}, {latitude: -2.55, longitude: -44.30})
    ];
  }
}
