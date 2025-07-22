import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**
   * get all categories
   *
   * @returns
   */
  getCategories() {
    const endpoint = `${base_url}/categories`;

    return this.http.get(endpoint);
  }

  /**
   * Guardar categoria
   * @param body
   * @returns
   */
  saveCategorie(body: any) {
    const endpoint = `${base_url}/categories`;
    return this.http.post(endpoint, body);
  }

  /**
   * Delete Categoria
   * @param body
   * @param id
   * @returns
   */
  updateCategorie(body: any, id: any) {
    const endpoint = `${base_url}/categories/${id}`;
    return this.http.put(endpoint, body);
  }

  /**
   * 
   * @param id Delete categoie
   * @returns 
   */
  deleteCategorie(id: any) {
    const endpoint = `${base_url}/categories/${id}`;
    return this.http.delete(endpoint);
  }

  /**
   * Buscar categories
   * @param id 
   * @returns 
   */
  getCategoryById(id: any){
    const endpoint = `${base_url}/categories/${id}`;
    return this.http.get(endpoint);
  }
}
