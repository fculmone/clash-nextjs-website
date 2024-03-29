'use client'

import {
  useReactTable, 
  getCoreRowModel, 
  flexRender,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { SortingState } from '@tanstack/react-table';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from "react";
import { Underdog } from 'next/font/google';
import { TableSkeleton } from './skeletons';




function ClanTagSearch({ handleSearch, isLoading, setIsLoading }: { handleSearch: Function, isLoading: boolean, setIsLoading: Dispatch<SetStateAction<boolean>>}) {
  //const [searchInput, setSearchInput] = useState(});
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function writeStuff() {
    //setSearchInput(event.target.value);
  }

  async function search(formData: any) {
    setIsLoading(true)
    handleSearch(formData.get("query"))
  };

  return (
    <form action={search}>
      <input name="query" type="text" placeholder='Enter Your Clan Tag' 
        defaultValue={searchParams.get('clan-tag')?.toString()}/>
      <button 
        className="disabled:border-red-500 disabled:border-2" 
        disabled={isLoading} 
        type="submit"
      >
        Search
      </button>
    </form>
  );
}



export default function BasicTable({ getData }: {getData: any}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(searchParams.get('clan-tag')?.toString() != undefined && searchParams.get('clan-tag')?.toString() != '');

  useEffect(() => {
    (async () => {
      try {
        if (searchParams.get('clan-tag')?.toString()) {
          if (searchParams.get('clan-tag')?.toString() === '') {
            console.log('clan-tag is empty')
            setData([]);
            setIsLoading(false);
          } else {
            //await new Promise((resolve) => setTimeout(resolve, 3000));
            const initialData = await getData(searchParams.get('clan-tag')?.toString());
            console.log('hi')
            setData(initialData);
            setIsLoading(false);
          }
          
        }
        
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  
  async function handleSearch(formData: string | undefined) { 
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    if (formData === '' || formData === undefined) {
      setData([])
    } else {
      const params = new URLSearchParams(searchParams);
      if(formData) {
        params.set('clan-tag', formData);
      } else {
        params.delete('clan-tag');
      }
      replace(`${pathname}?${params.toString()}`);
      const response = await getData(formData);
      setData(response)
    }
    
    setIsLoading(false);
  }

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns  = [
    {
      header: 'Name',
      accessorKey: 'Name',
    },
    {
      header: 'Trophies',
      accessorKey: 'Trophies',
    },
    {
      header: 'Avg War Fame',
      accessorKey: 'Avg Points',
      
    },
    {
      header: 'Total War Fame',
      accessorKey: 'Points',
    },
    {
      header: 'Weeks Participated',
      accessorKey: 'Weeks',
    },
    {
      header: 'Donations',
      accessorKey: 'Donations',
    },
    {
      header: 'Donations Received',
      accessorKey: 'Donations Received',
    },
  ]

  const [sorting, setSorting] = useState<SortingState>([])
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
     data, 
     columns,
     getCoreRowModel: getCoreRowModel(),
     getSortedRowModel: getSortedRowModel(),
     getFilteredRowModel: getFilteredRowModel(),
     state: {
      sorting: sorting,
      globalFilter: filtering
     },
     onSortingChange: setSorting,
     onGlobalFilterChange: setFiltering,
    })

  if (data.length == 0 && !isLoading) {
    return (
      <div>
        <ClanTagSearch handleSearch={handleSearch} isLoading={isLoading} setIsLoading={setIsLoading}/>
        <p>Please enter in your clan</p>
      </div>
    )
    
    
  } else if (data.length == 1 && !isLoading) {
    return (
    <div>
      <ClanTagSearch handleSearch={handleSearch} isLoading={isLoading} setIsLoading={setIsLoading}/>
      <p>Clan Tag is invalid</p>
    </div>

    )
    
    
  } else if (isLoading) {
    return (
      <div>
        < ClanTagSearch handleSearch={handleSearch} isLoading={isLoading} setIsLoading={setIsLoading}/>
        <TableSkeleton />
      </div>
      
    )
  } else {
    return (
        <div>
          < ClanTagSearch handleSearch={handleSearch} isLoading={isLoading} setIsLoading={setIsLoading}/>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              value={filtering}
              onChange={e => setFiltering(e.target.value)}
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-2 my-5"
              placeholder="Search for items"
            />
          </div>
          <div className="flex flex-1 overflow-x-auto shadow-md rounded-xl sm:rounded-md xl:w-[1200px] lg:w-[1000px] w-screen">      
            <table className='table-auto text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 w-screen'>
              <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => 
                    <th key={header.id} className={clsx(                
                      'px-6 py-3',
                      {
                        'text-left': header.column.getIndex() === 0,
                      },
                    )}>
                      {
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      }
                    </th>)}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} className='odd:bg-white odd:dark:bg-gray-900 even:dark:bg-gray-800 border-t dark:border-gray-700 border-gray-400'>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className={clsx(
                        'px-6 py-4',
                        {
                          'text-left font-bold': cell.column.getIndex() === 0,
                          'bg-red-200': cell.column.getIndex() === 2 && Number(cell.getValue()) <= 750,
                          'bg-yellow-200': cell.column.getIndex() === 2 && Number(cell.getValue()) > 750 && Number(cell.getValue()) <= 1600,
                          'bg-green-200': cell.column.getIndex() === 2 && Number(cell.getValue()) > 1600,
                        },
                      )}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
  

}