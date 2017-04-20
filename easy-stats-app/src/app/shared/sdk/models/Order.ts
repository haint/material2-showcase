/* tslint:disable */
import {
  Customer
} from '../index';

declare var Object: any;
export interface OrderInterface {
  "amount": number;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId"?: number;
  customer?: Customer;
}

export class Order implements OrderInterface {
  "amount": number;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  "customerId": number;
  customer: Customer;
  constructor(data?: OrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order`.
   */
  public static getModelName() {
    return "Order";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order for dynamic purposes.
  **/
  public static factory(data: OrderInterface): Order{
    return new Order(data);
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
      name: 'Order',
      plural: 'Orders',
      properties: {
        "amount": {
          name: 'amount',
          type: 'number'
        },
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
        "customerId": {
          name: 'customerId',
          type: 'number'
        },
      },
      relations: {
        customer: {
          name: 'customer',
          type: 'Customer',
          model: 'Customer'
        },
      }
    }
  }
}
