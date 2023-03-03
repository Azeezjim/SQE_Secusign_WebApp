interface AddressProps {
  address: string;
}

function Avatar({ address }: AddressProps) {
  return (
    <div className="aspect-square w-10 justify-self-end rounded-full bg-neutral-100">
      <img
        src={`https://robohash.org/${address}`}
        alt="avatar"
        className="h-full w-full rounded-full border border-neutral-800 object-cover"
      />
    </div>
  );
}

export default Avatar;
