import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  createJwtOptions(): JwtModuleOptions {
    return {
      signOptions: { algorithm: "HS256" }
    };
  }
}