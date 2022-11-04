// SPDX-License-Identifier: MIT

//0.8.11
pragma solidity >=0.7.0 <0.8.12;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";

contract OnChainNFT is ERC721Enumerable, Ownable {
  using Strings for uint256;

  uint256 public cost = 0.015 ether;
  uint256 public maxSupply = 396;
  bool public paused = false;
  address burnercontract;
  mapping (uint8 => uint8[3]) cell;

  constructor() ERC721("OCNFT", "OCNFT") {}

  // internal

  // public
  function mint() public payable {
    uint256 supply = totalSupply();
    require(!paused);
    require(msg.value >= cost);
    require(supply + 1 <= maxSupply);

    _mint(msg.sender, supply + 1);
  }

  function setPixel(uint8 pixel,uint8 r,uint8 g,uint8 b) public{
    cell[pixel][0] = r;
    cell[pixel][1] = g;
    cell[pixel][2] = b;
  }

    function rect() private view returns(string memory){
        string memory long = '<rect/>';
        bytes memory temp;
        uint256 fxc = 0;
        uint256 fx = 0;
        uint256 fy;
        string memory format = ",";
        for (uint8 i = 1; i <= 196; i++){
            fxc++;
            if(fxc == 15){
              fx = 0;
              fxc = 1;
            }
            uint256 fi = i;
            fy = (((fi-1)/14) * 32);
            temp = string.concat('<rect style=\"fill: rgb(', bytes(Strings.toString(cell[i][0])) , ',' , bytes(Strings.toString(cell[i][1])), ',' , bytes(Strings.toString(cell[i][2])) , ')" x="',bytes(Strings.toString(fx)),'" y="',bytes(Strings.toString(fy)),'" width="33" height="33"/>');
            long = string(string.concat(bytes(long), bytes(format), temp));
            fx = fx + 32;
        }
        return long;
    }

//Can change to view and add variation data. 
    function buildImage() public view returns(string memory) {
        return Base64.encode(bytes(abi.encodePacked(
    '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 1000 1000">',
    '<g transform="matrix(0.3 0.15 -4.55 11 350 630)" >',
    '<rect style="fill: rgb(144,79,43)" x="-37" y="-37" width="75" height="75" />',
    '</g>',
    '<g transform="matrix(0.3 -0.15 4.55 11 650 630)" >',
    '<rect style="fill: rgb(144,79,43)" x="-37" y="-37" width="75" height="75" />',
    '</g>',
    '<g transform="matrix(6 0 0 6 499.2 500)" >',
    '<rect style="stroke: rgb(0,0,0); stroke-width: 5; fill: rgb(255,255,255)" vector-effect="non-scaling-stroke"  x="-37" y="-37" width="75.4" height="75.4" />',
    '</g>,<g transform="matrix(1 0 0 1 280 280)">',
    rect(),
    '</g>',
    '<g transform="matrix(8 0 0 0.7 499.2 750)" >',
    '<rect style="fill: rgb(144,79,43)" x="-33" y="-33" width="66.17" height="60" />',
    '</g>',
    '</svg>'
        )));
    }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    return string(abi.encodePacked(
        'data:application/json;base64,', Base64.encode(bytes(abi.encodePacked(
          '{"name":"',
          "OC NFT",
          '", "description":"',
          "This NFT exists on chain",
          '", "image":"',
          'data:image/svg+xml;base64,',
          buildImage(),
          '"}'
        )))
    ));
  }

  function burnit(uint256 tokenId) external {
    require(tx.origin == ownerOf(tokenId));
    require(msg.sender == burnercontract);
    _burn(tokenId);
  }

  //only owner
  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  function setBurner(address burner) external onlyOwner {
    burnercontract = burner;
  }
 
  function withdraw() public payable onlyOwner {
    require(payable(msg.sender).send(address(this).balance));
  }

  function exit() external onlyOwner{
    selfdestruct(payable(address(msg.sender)));}

}