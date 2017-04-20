/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Order } from '../../models/Order';
import { Customer } from '../../models/Customer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Order: Order,
    Customer: Customer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
