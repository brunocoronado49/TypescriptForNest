import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeApiFetchAdapyer implements HttpAdapter {

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log('Con fetch');

    return data;
  }

}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios;
  
  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    console.log('Con axios')
    return data;
  }

  async post(url: string, data: any) {

  }

  async patch(url: string, data: any) {
    
  }

  async delete(url: string) {
    
  }

}
