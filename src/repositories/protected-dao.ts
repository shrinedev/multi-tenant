import { MultiTenantRepository } from "./multi-tenant-repository";
import { inject } from "@loopback/core";


/**
 * The interface for the Protected Dao that contains
 * the access to all repositorties. This consolidation is done
 * to ensure security by reducing the surface area of objects with
 * data layer access
 */
export interface IProtectedDao {

}

/**
 * Declare Var to allow for constructor signature check.
 * https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work
 */
declare var IProtectedDao: {
  new(multiTenantRepository: MultiTenantRepository): ProtectedDao;
}


export class ProtectedDao implements IProtectedDao {

  constructor(
    @inject('multitenant.repo')
    multiTenantRepository: MultiTenantRepository) { }
}

