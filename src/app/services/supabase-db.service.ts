import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Role } from '../model/role.model';
import { Permission } from '../model/permission.model';
import { RolePermission } from '../model/role-permission.model';
import { UserRole } from '../model/user-role.model';
import { UserDetails } from '../model/user-details.model';
import { UserSignature } from '../model/user-signature.model';
import { UserCompany } from '../model/user-company.model';
import { BankDetails } from '../model/bank-details.model';
import { UserBankDetails } from '../model/user-bank-details.model';
import { CompanyBankDetails } from '../model/company-bank-details.model';
import { Address } from '../model/address.model';
import { UserAddress } from '../model/user-address.model';
import { Property } from '../model/property.model';
import { RentalStatus } from '../model/rental-status.model';
import { RentalRequest } from '../model/rental-request.model';
import { RentalDocument } from '../model/rental-document.model';
import { Postbox } from '../model/postbox.model';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseDbService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://dchysqlrxmdxxejeljzt.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjaHlzcWxyeG1keHhlamVsanp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTAxMDUsImV4cCI6MjA2MjYyNjEwNX0.jdU8Klh9rd7FphC32u-uNSuYlEd7BVxsPpmoYHwHPtg'
    );
  }

  async getAll<T>(table: string): Promise<T[]> {
    const { data, error } = await this.supabase.from(table).select('*');
    if (error) throw error;
    return data as T[];
  }

  async getById<T>(table: string, id: string): Promise<T | null> {
    const { data, error } = await this.supabase.from(table).select('*').eq('id', id).single();
    if (error) throw error;
    return data as T;
  }

  async insert<T>(table: string, row: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase.from(table).insert(row).select().single();
    if (error) throw error;
    return data as T;
  }

  async update<T>(table: string, id: string, row: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase.from(table).update(row).eq('id', id).select().single();
    if (error) throw error;
    return data as T;
  }

  async delete(table: string, id: string): Promise<void> {
    const { error } = await this.supabase.from(table).delete().eq('id', id);
    if (error) throw error;
  }

  // Roles
  getAllRoles() { return this.getAll<Role>('roles'); }
  getRoleById(id: string) { return this.getById<Role>('roles', id); }
  createRole(role: Omit<Role, 'id'>) { return this.insert<Role>('roles', role); }

  // Permissions
  getAllPermissions() { return this.getAll<Permission>('permissions'); }
  getPermissionById(id: string) { return this.getById<Permission>('permissions', id); }
  createPermission(permission: Omit<Permission, 'id'>) { return this.insert<Permission>('permissions', permission); }

  // Role-Permissions
  getAllRolePermissions() { return this.getAll<RolePermission>('role_permissions'); }
  createRolePermission(rp: RolePermission) { return this.insert<RolePermission>('role_permissions', rp); }

  // User-Roles
  getAllUserRoles() { return this.getAll<UserRole>('user_roles'); }
  createUserRole(ur: Omit<UserRole, 'id'>) { return this.insert<UserRole>('user_roles', ur); }

  // User Details
  getAllUserDetails() { return this.getAll<UserDetails>('user_details'); }
  getUserDetailsById(id: string) { return this.getById<UserDetails>('user_details', id); }
  createUserDetails(details: Omit<UserDetails, 'id'>) { return this.insert<UserDetails>('user_details', details); }

  // User Signatures
  getAllUserSignatures() { return this.getAll<UserSignature>('user_signatures'); }
  createUserSignature(sig: Omit<UserSignature, 'id'>) { return this.insert<UserSignature>('user_signatures', sig); }

  // User Company
  getAllUserCompanies() { return this.getAll<UserCompany>('user_company'); }
  createUserCompany(company: Omit<UserCompany, 'id'>) { return this.insert<UserCompany>('user_company', company); }

  // Bank Details
  getAllBankDetails() { return this.getAll<BankDetails>('bank_details'); }
  createBankDetails(details: Omit<BankDetails, 'id'>) { return this.insert<BankDetails>('bank_details', details); }

  // User Bank Details
  getAllUserBankDetails() { return this.getAll<UserBankDetails>('user_bank_details'); }
  createUserBankDetails(ubd: UserBankDetails) { return this.insert<UserBankDetails>('user_bank_details', ubd); }

  // Company Bank Details
  getAllCompanyBankDetails() { return this.getAll<CompanyBankDetails>('company_bank_details'); }
  createCompanyBankDetails(cbd: CompanyBankDetails) { return this.insert<CompanyBankDetails>('company_bank_details', cbd); }

  // Addresses
  getAllAddresses() { return this.getAll<Address>('addresses'); }
  createAddress(addr: Omit<Address, 'id'>) { return this.insert<Address>('addresses', addr); }

  // User Addresses
  getAllUserAddresses() { return this.getAll<UserAddress>('user_addresses'); }
  createUserAddress(ua: UserAddress) { return this.insert<UserAddress>('user_addresses', ua); }

  // Properties
  getAllProperties() { return this.getAll<Property>('properties'); }
  getPropertyById(id: string) { return this.getById<Property>('properties', id); }
  createProperty(prop: Omit<Property, 'id'>) { return this.insert<Property>('properties', prop); }

  // Rental Status
  getAllRentalStatus() { return this.getAll<RentalStatus>('rental_status'); }
  createRentalStatus(rs: Omit<RentalStatus, 'id'>) { return this.insert<RentalStatus>('rental_status', rs); }

  // Rental Requests
  getAllRentalRequests() { return this.getAll<RentalRequest>('rental_requests'); }
  createRentalRequest(req: Omit<RentalRequest, 'id'>) { return this.insert<RentalRequest>('rental_requests', req); }

  // Rental Documents
  getAllRentalDocuments() { return this.getAll<RentalDocument>('rental_documents'); }
  createRentalDocument(doc: Omit<RentalDocument, 'id'>) { return this.insert<RentalDocument>('rental_documents', doc); }

  // Postbox
  getAllPostboxes() { return this.getAll<Postbox>('postbox'); }
  createPostbox(pb: Omit<Postbox, 'id'>) { return this.insert<Postbox>('postbox', pb); }

  // Message
  getAllMessages() { return this.getAll<Message>('message'); }
  createMessage(msg: Omit<Message, 'id'>) { return this.insert<Message>('message', msg); }
}