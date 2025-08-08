import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

//const base_url = 'https://springboot-app-468310.oa.r.appspot.com/api/v1';
const base_url = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**
   * get products
   * @returns
   */
  getProducts() {
    const endpoint = `${base_url}/products`;
    return this.http.get(endpoint);
  }

  /**
   * save products
   * @param body
   * @returns
   */
  saveProducts(body: any) {
    const endpoint = `${base_url}/products`;
    return this.http.post(endpoint, body);
  }

  /**
   * Update products
   * @param body
   * @param id
   * @returns
   */
  updateProducts(body: any, id: any) {
    const endpoint = `${base_url}/products/${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * delete products
   * @param id
   * @returns
   */
  deleteProduct(id: any) {
    const endpoint = `${base_url}/products/${id}`;
    return this.http.delete(endpoint);
  }

  /**
   * Search by name
   */
  seachByName(name: any) {
    const endpoint = `${base_url}/products/filter/${name}`;
    return this.http.get(endpoint);
  }

  /**
   * 
   * @returns export products
   */
  exportProducts() {
    const endpoint = `${base_url}/products/export/excel`;
    return this.http.get(endpoint, {
      responseType: 'blob',
    });
  }
}
