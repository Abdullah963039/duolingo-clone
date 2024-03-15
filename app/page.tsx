import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-4 my-9">
      <Button>DEFAULT</Button>

      <Button variant="primary">PRIMARY</Button>
      <Button variant="primary-outline">PRIMARY outline</Button>

      <Button variant="secondary">seconday</Button>
      <Button variant="secondary-outline">seconday outline</Button>

      <Button variant="danger">danger</Button>
      <Button variant="danger-outline">danger outline</Button>

      <Button variant="super">super</Button>
      <Button variant="super-outline">super outline</Button>

      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebar-outline">sidebar outline</Button>

      <Button variant="ghost">ghost</Button>
    </div>
  );
}
