import { useQuery } from 'react-query';
import axios from 'axios';

const ApiClient=()=> {
    let axiosInstance;
    axiosInstance = axios.create({ 
        baseURL : 'https://exam-cloudrun-r5c7oqswwq-as.a.run.app/api/data',
        timeout: 10000
    });

    return axiosInstance
}

export function useTotalSales({ params }) {
    const { data, isLoading, error } = useQuery(
      ['total_sales', params],
      async () => {
        const response = await ApiClient().get('/sales/query_sales', { params });
        const data = response.data;
        

        return data;
      },
      {
        keepPreviousData: true,
      }
    );
  
    return { data, isLoading, error };
  }


  export function useTotalTransactions({ params }) {
    const { data, isLoading, error } = useQuery(
      ['total_transactions', params],
      async () => {
        const response = await ApiClient().get('/sales/query_transactions', { params });
        const data = response.data;
        
        
        return data;
      },
      {
        keepPreviousData: true,
      }
    );
  
    return { data, isLoading, error };
  }

  export function useTotalCustomers({ params }) {
    const { data, isLoading, error } = useQuery(
      ['unique_customers', params],
      async () => {
        const response = await ApiClient().get('/sales/query_customers', { params });
        const data = response.data;
        
        return data;
      },
      {
        keepPreviousData: true,
      }
    );
  
    return { data, isLoading, error };
  }


  export function useArtistData() {
    const { data, isLoading, error } = useQuery(
      ['ArtistId','Name'],
      async () => {
        const response = await ApiClient().get('/sales/artists');
        const data = response.data;

        // console.log(data)
        
        return data;
      },
      {
        keepPreviousData: true,
      }
    );
  
    return { data, isLoading, error };
  }

  export function useTracksData() {
    const { data, isLoading, error } = useQuery(
      ['TrackId','Name','GenreId', ],
      async () => {
        const response = await ApiClient().get('/sales/tracks');
        const data = response.data;

        // console.log(data)
        
        return data;
      },
      {
        keepPreviousData: true,
      }
    );
  
    return { data, isLoading, error };
  }

