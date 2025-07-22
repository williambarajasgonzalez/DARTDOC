import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function WeaponPosition() {
  return (
    <>
      <h2 className="scroll-m-20 text-white text-center pb-2 pt-6 text-3xl font-semibold tracking-tight first:mt-0">
            Weapon Position
      </h2>
      <div className='className="w-full max-w-xs"'>
        <Carousel >
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="/logo/placeholder.png" className='w-42' alt="Port Arms image"/>
                </CardContent>
              </Card>
              
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="/logo/placeholder.png" className='w-42' alt="Port Arms image"/>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="/logo/placeholder.png" className='w-42' alt="Port Arms image"/>
                </CardContent>
              </Card>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
    
  )
}
