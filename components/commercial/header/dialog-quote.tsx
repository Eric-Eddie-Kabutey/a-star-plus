'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button, buttonVariants } from '@/components/ui/button'; 
import { cn } from '@/lib/utils';

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  buttonColor?: string;
}

export function QuoteDialog({ 
  open, 
  onOpenChange,
  title = "Request an estimate for your business",
  description = "A Star Plus Pest Control are trained to diagnose and treat all types of pest problems.",
  buttonColor = "red-700"
}: QuoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {/* Wrap the form in a ScrollArea */}
        <ScrollArea className="max-h-[70vh] md:max-h-auto">
          <form className="grid gap-6 py-4">          
          <div className="grid gap-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="eg., John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" placeholder="eg., +1 214 000 000" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email-address">Email Address</Label>
            <Input id="email-address" type="email" placeholder="example@gmail.com" />
            </div>
             <div className="grid gap-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" type="company-name" placeholder="eg. A Star Plus Pets Control" />
            </div>
            <div className="grid gap-2 w-full">
            <Label htmlFor="types-of-business">Type of business</Label>
            <Select>
              <SelectTrigger id="types-of-business" className='w-full'>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pest-control">Pest and/or Mosquito Control</SelectItem>
                <SelectItem value="termite-control">Termite Control</SelectItem>
                <SelectItem value="bed-bug">Bed Bug Inspection</SelectItem>
                <SelectItem value="attic-insulation">Attic Insulation</SelectItem>
              </SelectContent>
            </Select>
            </div>
             <div className="grid gap-2">
            <Label htmlFor="street-address">Street Address</Label>
            <Input id="street-address" type="street-address" placeholder="eg. John Smith, 1234, Main Street, Texas" />
            </div>
          <Button type="submit" className={cn(`w-full9 text-white font-bold py-3`, buttonColor === "red" ? "bg-red-700 hover:bg-red-800" : "bg-[#000084] hover:bg-[#000080]")}>
            Submit
          </Button>
         </form>

          <ScrollBar orientation="vertical" className="w-2 bg-gray-300 rounded-full" />
        </ScrollArea>        
      </DialogContent>
    </Dialog>
  );
}