import { HttpPostClientSpy } from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = 'http://localhost:8080'): SutTypes => {
  
  const httpPostClientSpy = new HttpPostClientSpy();
  // system under test
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentication test", () => {
  it("should call HttpPostClient with corrent URL", async () => {
    const url = "test.com"
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
