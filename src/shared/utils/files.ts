export const mapBlobToFile = (blob: Blob, name: string, type: string) => {
  const file = new File([blob], name, { type })
  return file
}
