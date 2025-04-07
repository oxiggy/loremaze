// Disabled UI variant via useFormStatus()

/*
import {useFormStatus} from 'react-dom';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';

export const Content = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required disabled={pending} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required disabled={pending} />
      </div>
      <Button type="submit" disabled={pending}>Login</Button>
    </>
  )
}
*/
