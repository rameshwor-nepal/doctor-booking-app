import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='mt-10 items-center gap-1 flex flex-col'>
            <h2 className='font-bold text-4xl tracking-wide'>
                Search <span className='text-primary'>Doctors</span>
            </h2>
            <h3 className='text-gray-500 text-xl'>
                Search Your Doctor and book Appointment in one click
            </h3>
            <div className='flex w-full mt-4 max-w-sm items-center  space-x-2'>
                <Input type="text" placeholder="Search...." />
                <Button type="submit">
                    <Search className='h-4 w-4 mr-2'/>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default SearchBar