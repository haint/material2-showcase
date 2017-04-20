/* tslint:disable */
import {
  Order
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  orders?: Order[];
}

export class Customer implements CustomerInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  orders: Order[];
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Customer',
      plural: 'Customers',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        orders: {
          name: 'orders',
          type: 'Order[]',
          model: 'Order'
        },
      }
    }
  }
}
